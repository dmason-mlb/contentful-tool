const fs = require('fs');
const path = require('path');
const { introspectSchema } = require('./introspect');

function formatType(type) {
  if (!type) return 'Unknown';
  
  if (type.kind === 'NON_NULL') {
    return `${formatType(type.ofType)}!`;
  }
  
  if (type.kind === 'LIST') {
    return `[${formatType(type.ofType)}]`;
  }
  
  return type.name || 'Unknown';
}

function generateQueryDocs(schema) {
  const queryType = schema.types.find(t => t.name === schema.queryType.name);
  if (!queryType) return '';

  let docs = `# Queries\n\n`;
  docs += `The root query type provides the following operations:\n\n`;

  queryType.fields.forEach(field => {
    docs += `## ${field.name}\n\n`;
    if (field.description) {
      docs += `${field.description}\n\n`;
    }
    
    docs += `**Return Type:** \`${formatType(field.type)}\`\n\n`;
    
    if (field.args && field.args.length > 0) {
      docs += `**Arguments:**\n\n`;
      field.args.forEach(arg => {
        const required = arg.type.kind === 'NON_NULL' ? ' (required)' : '';
        docs += `- \`${arg.name}\`: \`${formatType(arg.type)}\`${required}`;
        if (arg.description) {
          docs += ` - ${arg.description}`;
        }
        if (arg.defaultValue) {
          docs += ` - Default: \`${arg.defaultValue}\``;
        }
        docs += `\n`;
      });
      docs += `\n`;
    }
    
    if (field.isDeprecated) {
      docs += `**⚠️ DEPRECATED:** ${field.deprecationReason}\n\n`;
    }
    
    docs += `---\n\n`;
  });

  return docs;
}

function generateMutationDocs(schema) {
  const mutationType = schema.types.find(t => t.name === schema.mutationType?.name);
  if (!mutationType) return '# Mutations\n\nNo mutations available.\n\n';

  let docs = `# Mutations\n\n`;
  docs += `The root mutation type provides the following operations:\n\n`;

  mutationType.fields.forEach(field => {
    docs += `## ${field.name}\n\n`;
    if (field.description) {
      docs += `${field.description}\n\n`;
    }
    
    docs += `**Return Type:** \`${formatType(field.type)}\`\n\n`;
    
    if (field.args && field.args.length > 0) {
      docs += `**Arguments:**\n\n`;
      field.args.forEach(arg => {
        const required = arg.type.kind === 'NON_NULL' ? ' (required)' : '';
        docs += `- \`${arg.name}\`: \`${formatType(arg.type)}\`${required}`;
        if (arg.description) {
          docs += ` - ${arg.description}`;
        }
        if (arg.defaultValue) {
          docs += ` - Default: \`${arg.defaultValue}\``;
        }
        docs += `\n`;
      });
      docs += `\n`;
    }
    
    if (field.isDeprecated) {
      docs += `**⚠️ DEPRECATED:** ${field.deprecationReason}\n\n`;
    }
    
    docs += `---\n\n`;
  });

  return docs;
}

function generateObjectTypeDocs(schema) {
  const objectTypes = schema.types.filter(t => 
    t.kind === 'OBJECT' && 
    !t.name.startsWith('__') &&
    t.name !== schema.queryType?.name &&
    t.name !== schema.mutationType?.name &&
    t.name !== schema.subscriptionType?.name
  );

  let docs = `# Object Types\n\n`;
  docs += `The following object types are available in the schema:\n\n`;

  objectTypes.forEach(type => {
    docs += `## ${type.name}\n\n`;
    if (type.description) {
      docs += `${type.description}\n\n`;
    }
    
    if (type.interfaces && type.interfaces.length > 0) {
      docs += `**Implements:** ${type.interfaces.map(i => i.name).join(', ')}\n\n`;
    }
    
    if (type.fields && type.fields.length > 0) {
      docs += `**Fields:**\n\n`;
      type.fields.forEach(field => {
        docs += `- \`${field.name}\`: \`${formatType(field.type)}\``;
        if (field.description) {
          docs += ` - ${field.description}`;
        }
        if (field.args && field.args.length > 0) {
          docs += `\n  - **Arguments:**\n`;
          field.args.forEach(arg => {
            const required = arg.type.kind === 'NON_NULL' ? ' (required)' : '';
            docs += `    - \`${arg.name}\`: \`${formatType(arg.type)}\`${required}`;
            if (arg.description) {
              docs += ` - ${arg.description}`;
            }
            docs += `\n`;
          });
        }
        if (field.isDeprecated) {
          docs += ` - **⚠️ DEPRECATED:** ${field.deprecationReason}`;
        }
        docs += `\n`;
      });
      docs += `\n`;
    }
    
    docs += `---\n\n`;
  });

  return docs;
}

function generateScalarAndEnumDocs(schema) {
  const scalars = schema.types.filter(t => t.kind === 'SCALAR' && !t.name.startsWith('__'));
  const enums = schema.types.filter(t => t.kind === 'ENUM');

  let docs = `# Scalars and Enums\n\n`;
  
  if (scalars.length > 0) {
    docs += `## Scalar Types\n\n`;
    scalars.forEach(scalar => {
      docs += `### ${scalar.name}\n\n`;
      if (scalar.description) {
        docs += `${scalar.description}\n\n`;
      }
    });
  }
  
  if (enums.length > 0) {
    docs += `## Enum Types\n\n`;
    enums.forEach(enumType => {
      docs += `### ${enumType.name}\n\n`;
      if (enumType.description) {
        docs += `${enumType.description}\n\n`;
      }
      
      if (enumType.enumValues && enumType.enumValues.length > 0) {
        docs += `**Values:**\n\n`;
        enumType.enumValues.forEach(value => {
          docs += `- \`${value.name}\``;
          if (value.description) {
            docs += ` - ${value.description}`;
          }
          if (value.isDeprecated) {
            docs += ` - **⚠️ DEPRECATED:** ${value.deprecationReason}`;
          }
          docs += `\n`;
        });
        docs += `\n`;
      }
      
      docs += `---\n\n`;
    });
  }

  return docs;
}

function generateInputTypeDocs(schema) {
  const inputTypes = schema.types.filter(t => t.kind === 'INPUT_OBJECT');
  const interfaces = schema.types.filter(t => t.kind === 'INTERFACE');

  let docs = `# Input Types and Interfaces\n\n`;
  
  if (inputTypes.length > 0) {
    docs += `## Input Types\n\n`;
    inputTypes.forEach(inputType => {
      docs += `### ${inputType.name}\n\n`;
      if (inputType.description) {
        docs += `${inputType.description}\n\n`;
      }
      
      if (inputType.inputFields && inputType.inputFields.length > 0) {
        docs += `**Fields:**\n\n`;
        inputType.inputFields.forEach(field => {
          const required = field.type.kind === 'NON_NULL' ? ' (required)' : '';
          docs += `- \`${field.name}\`: \`${formatType(field.type)}\`${required}`;
          if (field.description) {
            docs += ` - ${field.description}`;
          }
          if (field.defaultValue) {
            docs += ` - Default: \`${field.defaultValue}\``;
          }
          docs += `\n`;
        });
        docs += `\n`;
      }
      
      docs += `---\n\n`;
    });
  }
  
  if (interfaces.length > 0) {
    docs += `## Interfaces\n\n`;
    interfaces.forEach(interfaceType => {
      docs += `### ${interfaceType.name}\n\n`;
      if (interfaceType.description) {
        docs += `${interfaceType.description}\n\n`;
      }
      
      if (interfaceType.fields && interfaceType.fields.length > 0) {
        docs += `**Fields:**\n\n`;
        interfaceType.fields.forEach(field => {
          docs += `- \`${field.name}\`: \`${formatType(field.type)}\``;
          if (field.description) {
            docs += ` - ${field.description}`;
          }
          docs += `\n`;
        });
        docs += `\n`;
      }
      
      if (interfaceType.possibleTypes && interfaceType.possibleTypes.length > 0) {
        docs += `**Implemented by:** ${interfaceType.possibleTypes.map(t => t.name).join(', ')}\n\n`;
      }
      
      docs += `---\n\n`;
    });
  }

  return docs;
}

function generateOverviewDocs(schema) {
  const totalTypes = schema.types.length;
  const objectTypes = schema.types.filter(t => t.kind === 'OBJECT' && !t.name.startsWith('__')).length;
  const inputTypes = schema.types.filter(t => t.kind === 'INPUT_OBJECT').length;
  const interfaces = schema.types.filter(t => t.kind === 'INTERFACE').length;
  const enums = schema.types.filter(t => t.kind === 'ENUM').length;
  const scalars = schema.types.filter(t => t.kind === 'SCALAR' && !t.name.startsWith('__')).length;
  const unions = schema.types.filter(t => t.kind === 'UNION').length;

  const queryType = schema.types.find(t => t.name === schema.queryType.name);
  const mutationType = schema.types.find(t => t.name === schema.mutationType?.name);
  
  const queryCount = queryType ? queryType.fields.length : 0;
  const mutationCount = mutationType ? mutationType.fields.length : 0;

  let docs = `# Contentful GraphQL Schema Overview\n\n`;
  docs += `This documentation was generated on ${new Date().toISOString().split('T')[0]} using GraphQL introspection.\n\n`;
  docs += `## Schema Statistics\n\n`;
  docs += `- **Total Types:** ${totalTypes}\n`;
  docs += `- **Object Types:** ${objectTypes}\n`;
  docs += `- **Input Types:** ${inputTypes}\n`;
  docs += `- **Interfaces:** ${interfaces}\n`;
  docs += `- **Enums:** ${enums}\n`;
  docs += `- **Scalars:** ${scalars}\n`;
  docs += `- **Unions:** ${unions}\n`;
  docs += `- **Available Queries:** ${queryCount}\n`;
  docs += `- **Available Mutations:** ${mutationCount}\n\n`;
  
  docs += `## Root Types\n\n`;
  docs += `- **Query Type:** ${schema.queryType.name}\n`;
  if (schema.mutationType) {
    docs += `- **Mutation Type:** ${schema.mutationType.name}\n`;
  }
  if (schema.subscriptionType) {
    docs += `- **Subscription Type:** ${schema.subscriptionType.name}\n`;
  }
  docs += `\n`;
  
  docs += `## Documentation Structure\n\n`;
  docs += `- [Queries](./queries.md) - All available query operations\n`;
  docs += `- [Mutations](./mutations.md) - All available mutation operations\n`;
  docs += `- [Object Types](./object-types.md) - All object type definitions\n`;
  docs += `- [Scalars and Enums](./scalars-enums.md) - Scalar types and enumerations\n`;
  docs += `- [Input Types and Interfaces](./input-types-interfaces.md) - Input object types and interfaces\n\n`;

  return docs;
}

async function generateDocumentation() {
  console.log('Introspecting Contentful GraphQL schema...');
  
  try {
    const schema = await introspectSchema();
    
    console.log('Generating documentation...');
    
    // Create docs directory if it doesn't exist
    const docsDir = path.join(__dirname, 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }
    
    // Generate overview
    const overview = generateOverviewDocs(schema);
    fs.writeFileSync(path.join(docsDir, 'README.md'), overview);
    
    // Generate query docs
    const queryDocs = generateQueryDocs(schema);
    fs.writeFileSync(path.join(docsDir, 'queries.md'), queryDocs);
    
    // Generate mutation docs
    const mutationDocs = generateMutationDocs(schema);
    fs.writeFileSync(path.join(docsDir, 'mutations.md'), mutationDocs);
    
    // Generate object type docs
    const objectTypeDocs = generateObjectTypeDocs(schema);
    fs.writeFileSync(path.join(docsDir, 'object-types.md'), objectTypeDocs);
    
    // Generate scalar and enum docs
    const scalarEnumDocs = generateScalarAndEnumDocs(schema);
    fs.writeFileSync(path.join(docsDir, 'scalars-enums.md'), scalarEnumDocs);
    
    // Generate input type and interface docs
    const inputTypeDocs = generateInputTypeDocs(schema);
    fs.writeFileSync(path.join(docsDir, 'input-types-interfaces.md'), inputTypeDocs);
    
    // Save raw schema data for reference
    fs.writeFileSync(path.join(docsDir, 'schema.json'), JSON.stringify(schema, null, 2));
    
    console.log('Documentation generated successfully!');
    console.log('Files created:');
    console.log('- docs/README.md (overview)');
    console.log('- docs/queries.md');
    console.log('- docs/mutations.md');
    console.log('- docs/object-types.md');
    console.log('- docs/scalars-enums.md');
    console.log('- docs/input-types-interfaces.md');
    console.log('- docs/schema.json (raw schema data)');
    
  } catch (error) {
    console.error('Error generating documentation:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  generateDocumentation();
}

module.exports = { generateDocumentation };