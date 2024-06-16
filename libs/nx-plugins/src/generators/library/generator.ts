import {
  formatFiles,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { Linter } from '@nx/eslint';
import {
  libraryGenerator as ReactLibraryGenerator,
} from '@nx/react';

import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  try {
    await ReactLibraryGenerator(tree, {
      name: options.name,
      linter: Linter.EsLint,
      style: 'scss',
      component: true,
    });

    const project = readProjectConfiguration(tree, options.name);

    console.log(project);

    // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
    await formatFiles(tree);
  } catch (err) {
    console.log(err);
  } // const projectRoot = `libs/${options.name}`;
}

export default libraryGenerator;
