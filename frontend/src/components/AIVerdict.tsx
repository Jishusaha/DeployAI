interface Props{

repo:any;

score:number;

}

export default function AIVerdict({

repo,

score

}:Props){

let verdict="";

if(score>=90){

verdict="Excellent repository. Production ready.";

}

else if(score>=75){

verdict="Good quality repository with minor improvements recommended.";

}

else{

verdict="Repository requires additional setup before deployment.";

}

return(

<div className="mt-8 bg-[#111827] rounded-2xl border border-cyan-500/20 p-8">

<h2 className="text-3xl font-bold text-cyan-400 mb-6">

AI Verdict

</h2>

<p className="text-lg text-gray-300 leading-8">

{verdict}

</p>

</div>

)

}