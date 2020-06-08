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
                  buildHookId: '5edd849aeb4b84892e7c77c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bze9qqek',
                  apiId: '3d24bfd5-2588-407e-81f1-3c11f490c907'
                },
                {
                  buildHookId: '5edd849a2908fe5c9499d396',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u72ar6jj',
                  apiId: 'eda78e87-cea6-4855-aa06-65bbffc4bf76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guruduttperi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u72ar6jj.netlify.app',
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
