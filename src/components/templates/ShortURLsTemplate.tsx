import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, ExternalLink } from 'lucide-react';
import { cn } from '@/utils/cn';
import { CategoryHeader } from '@/components/molecules/CategoryHeader';
import { SearchBar } from '@/components/molecules/SearchBar';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { AppWindow, Users, Wrench, Link2 } from 'lucide-react';

interface URLItem {
  path: string;
  title: string;
  description: string;
  external?: boolean;
}

interface Category {
  name: string;
  icon: typeof AppWindow;
  items: URLItem[];
}

interface ShortURLsTemplateProps {
  categories: Category[];
}

export const ShortURLsTemplate: React.FC<ShortURLsTemplateProps> = ({
  categories
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(
      item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.path.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const totalURLs = categories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Short <span className="text-gradient">URLs</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            A collection of short URLs for quick access to various pages and resources.
          </p>
          
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="text-text-muted">Total:</span>
            <Badge variant="purple">{totalURLs} URLs</Badge>
          </div>
        </motion.div>

        {/* Search and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex-1 max-w-xl">
            <SearchBar
              placeholder="Search URLs..."
              onSearch={setSearchQuery}
            />
          </div>
          
          <div className="flex items-center gap-2 glass rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'p-2 rounded-md transition-colors',
                viewMode === 'grid' 
                  ? 'bg-accent-purple text-white' 
                  : 'text-text-muted hover:text-text-primary'
              )}
              aria-label="Grid view"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'p-2 rounded-md transition-colors',
                viewMode === 'list' 
                  ? 'bg-accent-purple text-white' 
                  : 'text-text-muted hover:text-text-primary'
              )}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <AnimatePresence mode="wait">
          {searchQuery && filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-text-muted text-lg">No URLs found matching "{searchQuery}"</p>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <CategoryHeader
                    title={category.name}
                    count={category.items.length}
                    icon={category.icon}
                  />
                  
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                        >
                          <Card
                            title={item.title}
                            description={item.description}
                            href={item.path}
                            count={undefined}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="glass rounded-xl overflow-hidden">
                      {category.items.map((item, itemIndex) => (
                        <motion.a
                          key={item.path}
                          href={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                          className={cn(
                            'flex items-center justify-between p-4 hover:bg-surface-hover transition-colors',
                            itemIndex !== category.items.length - 1 && 'border-b border-white/5'
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-accent-purple font-mono text-sm">
                              {item.path}
                            </span>
                            <span className="text-text-secondary">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.external && (
                              <ExternalLink className="w-4 h-4 text-text-muted" />
                            )}
                            <span className="text-text-muted text-sm">
                              {item.description}
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
