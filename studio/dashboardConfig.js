export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed63ca2661e51972e20a62d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-ny-studio',
                  apiId: '9909685d-c859-4f96-b9b6-d8614cd5caed'
                },
                {
                  buildHookId: '5ed63ca2ec7ef9a2e277e073',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-ny',
                  apiId: '27e13e78-9558-45cc-baf0-4b91c1f5596f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/sanity-sapper-blog-ny',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-ny.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
