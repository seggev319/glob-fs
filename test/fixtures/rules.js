glob('!**/*.{md,js,less}', {cwd: 'test', inclusive: true, dot: false});
glob('!*.md')
glob('*')
glob('*', { dot: false })
glob('*', {cwd: 'test/fixtures/a'})
glob('**', {cwd: 'test' })
glob('**/*.js')
glob('**/.*', {cwd: 'test/fixtures', dotfiles: true})
glob('**/d', { cwd: path.resolve('a') })
glob('**/d', { cwd: path.resolve('a/b') })
glob('**/d', { cwd: path.resolve('a/b/') })
glob('**/d', { cwd: process.cwd() })
glob('**/m*.css')
glob('*.js')
glob('*.js', {cwd: 'lib'})
glob('*.js', {cwd: 'test'})
glob('.*', { dot: false })
glob('.*', { dot: true })
glob('.*', { dotdirs: true })
glob('.*', { dotfiles: true })
glob('.*', {cwd: 'test/fixtures', dotfiles: true})
glob('../**/*.js')
glob('../../**/*.js')
glob('/b*/**', { root: '.' })
glob('/b*/**', { root: 'a', cwd: path.resolve('a/b') })
glob('/b*/**', { root: path.resolve('a') })
glob('a/**/[gh]')
glob('a/b/.*', {cwd: 'test/fixtures', dotfiles: true})
glob('fixtures/.*', {cwd: 'test', dotfiles: true})
glob('fixtures/a/b/.*', {cwd: 'test', dotfiles: true})
glob('lib/*.js')
glob('README.md')
glob('test/*.js')
glob('test/fixtures/a/*')
glob(['!*.md', '*'])