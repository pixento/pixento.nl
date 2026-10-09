import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

export const projectLang = (p: Project) => p.id.split('/')[0] as Lang;
export const projectSlug = (p: Project) => p.id.split('/')[1];

/** Projects in one language, newest first. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (p) => projectLang(p) === lang);
  return all.sort((a, b) => b.data.year - a.data.year);
}
