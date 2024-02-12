import path from 'path';
import fs from 'fs/promises';

/** 하위 폴더를 포함한 모든 파일을 재귀적으로 탐색 (ex ./docs/)
 *
 * response: ["a.mdx", "folder/b.mdx", "c.mdx"]
 */
export const getFiles = async (
  dir: string,
  baseDir: string = dir
): Promise<string[]> => {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory()
        ? getFiles(res, baseDir)
        : Promise.resolve(path.relative(baseDir, res));
    })
  );
  return files.flat();
};
