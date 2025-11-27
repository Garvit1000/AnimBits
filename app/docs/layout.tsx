import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: ReactNode }) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      tree={source.pageTree}
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tabMode="navbar"
    >
      {children}
    </DocsLayout>
  );
}
