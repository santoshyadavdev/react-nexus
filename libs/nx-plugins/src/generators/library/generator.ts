import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import { Linter } from '@nx/eslint';
import {
  componentTestGenerator,
  libraryGenerator as ReactLibraryGenerator,
} from '@nx/react';

import { LibraryGeneratorSchema } from './schema';
import { CreateComponentSpecFileSchema } from '@nx/react/src/generators/component-cypress-spec/component-cypress-spec';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  // const projectRoot = `libs/${options.name}`;

  await ReactLibraryGenerator(tree, {
    name: options.name,
    linter: Linter.EsLint,
    style: 'scss',
  });

  const cypressSchema: CreateComponentSpecFileSchema = {
    project: options.name,
    componentPath: '',
  };

  await componentTestGenerator(tree, cypressSchema);

  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default libraryGenerator;
