import type { Compiler, Configuration } from 'webpack';
export { merge } from 'webpack-merge';

export function dangerouslySetWebpackConfig(
  config: Configuration,
): Configuration;

interface ScoobieConfig {
  mermaid?: { rootDir: string };
  remark?: (defaultPlugins: unknown[]) => unknown[];
}

export class ScoobieWebpackPlugin {
  constructor(config?: ScoobieConfig);

  apply(compiler: Compiler): void;
}
