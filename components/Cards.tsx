import Image from 'next/image'
import React from 'react'
import { data } from './data'
import Link from 'next/link'
import GithubLogo from '../public/githublogo.png'
import LinkICon from '../public/link.png'

type Props = {}

const Cards = (props: Props) => {

    return (
        <section className='w-full flex flex-wrap mt-10'>
            {data.map((project, index) => {
                return (
                    <div className="md:w-1/3 p-5" key={index}>
                        <div className="p-4 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
                            <div>
                                <Image className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={project.photo || "https://dummyimage.com/720x400"} alt="project" width={720} height={400} />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-lg title-font font-bold text-gray-800 mb-1">{project.name}</h2>
                                    <p className="leading-relaxed mb-4 text-gray-600">{project.projectDescription}</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap justify-around mt-auto p-4">
                                <Link href={project.githubRepoUrl} className="inline-flex items-center md:mb-2 lg:mb-0 hover:bg-cyan-500 p-3 rounded-full hover:transition-all bg-gray-800 text-white" target='_blank'>
                                    <Image src={GithubLogo} alt='Github' width={20} height={20} />
                                </Link>
                                <Link href={project.url} className="inline-flex items-center md:mb-2 lg:mb-0 hover:bg-cyan-500 p-3 rounded-full hover:transition-all bg-gray-800 text-white" target='_blank'>
                                    <Image src={LinkICon} alt='Link' width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>

    )
}

export default Cards