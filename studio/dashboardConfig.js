export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dd486f6cb3b6ada7d4ff34d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-449zjqkj',
                  apiId: '9d28951c-f170-452e-af43-7e10b4206eee'
                },
                {
                  buildHookId: '5dd486f61c87b08f462876f2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dh55yc32',
                  apiId: 'd387a6e6-b43f-4178-83d3-16065c05cbea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isobar-dsharpe/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dh55yc32.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
