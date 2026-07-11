interface props {
    avatar:string;
    repo:string;
    owner:string;
    description:string;
}

export default function RepositoryHeader({
    avatar,
    repo,
    owner,
    description
}:props){
    return(
        <div className="bg-[#111827] rounded-2xl p-8 border border-cyan-500/20 flex gap-6 items-center">
            <img
                src={avatar}
                alt={repo}
                className="w-24 h-24 rounded-full border-4 border-cyan-500"
                />
                <div>
                    <h2 className="text-4xl font-black">
                        {repo}
                        </h2>
                        
                        <p className="text-cyan-400 text-xl mt-2">
                            by {owner}
                                </p>
                        
                        <p className="text-gray-400 mt-4">
                            {description || "No description available."}
                        </p>
                    </div>
        </div>
    )
}