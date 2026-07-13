interface Props {

    repo: any;

    score: number;

}

export default function AIVerdict({

    repo,

    score

}: Props) {

    let verdict = "";

    if (repo.framework === "Next.js") {

        verdict =
            "Production-ready Next.js application. Native Vercel deployment is recommended. Docker is optional.";

    }

    else if (repo.framework === "Express") {

        verdict =
            "Backend API detected. Docker and CI/CD are recommended before production deployment.";

    }

    else if (repo.framework === "Electron") {

        verdict =
            "Desktop application detected. Cloud deployment is not applicable. Focus on installer packaging.";

    }

    else if (repo.framework === "FastAPI") {

        verdict =
            "FastAPI backend detected. Railway or Docker deployment is recommended for production.";

    }

    else if (score >= 90) {

        verdict =
            "Excellent repository with production-ready configuration.";

    }

    else if (score >= 70) {

        verdict =
            "Good quality repository with a few recommended improvements.";

    }

    else {

        verdict =
            "Repository requires additional configuration before production deployment.";

    }

    return (

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