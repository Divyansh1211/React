import React from 'react'

function card({username = "ambatukam", post = "NA", photu = "https://miro.medium.com/v2/resize:fit:1358/1*xwAIUbfad95lsuGf2n9nnA.jpeg"}) {
  return (
    
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={photu}/>
        <blockquote>
        <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
        </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            {post}, Algolia
        </div>
        </figcaption>
    </figure>
  )
}

export default card