interface Props {
    repo: any;
}

export default function RiskAnalyzer({ repo }: Props) {

    const high: string[] = [];
    const medium: string[] = [];
    const low: string[] = [];

    // High Risks
    if (!repo.hasDockerfile)
        high.push("Missing Dockerfile for containerized deployment.");

    if (!repo.hasReadme)
        high.push("README documentation is missing.");

    // Medium Risks
    if (!repo.hasGithubActions)
        medium.push("CI/CD pipeline is not configured.");

    if (!repo.hasLicense)
        medium.push("Repository has no open-source license.");

    // Low Risks
    if (repo.stars < 20)
        low.push("Low community adoption.");

    if (repo.visibility === "private")
        low.push("Private repository may require deployment authentication.");

    const riskScore =
        high.length * 30 +
        medium.length * 15 +
        low.length * 5;

    let level = "";
    let color = "";

    if (riskScore >= 60) {

        level = "High Risk";
        color = "text-red-400";

    }

    else if (riskScore >= 30) {

        level = "Medium Risk";
        color = "text-yellow-400";

    }

    else {

        level = "Low Risk";
        color = "text-green-400";

    }

    return (

        <div className="mt-8 bg-[#111827] border border-cyan-500/20 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-8">

                🚨 AI Deployment Risk Analysis

            </h2>

            <div className="flex justify-between items-center mb-8">

                <span className="text-gray-400">

                    Overall Risk

                </span>

                <span className={`font-bold text-xl ${color}`}>

                    {level}

                </span>

            </div>

            {high.length > 0 && (

                <div className="mb-6">

                    <h3 className="text-red-400 font-bold mb-3">

                        High Priority

                    </h3>

                    <ul className="space-y-2">

                        {high.map((item) => (

                            <li key={item}>🔴 {item}</li>

                        ))}

                    </ul>

                </div>

            )}

            {medium.length > 0 && (

                <div className="mb-6">

                    <h3 className="text-yellow-400 font-bold mb-3">

                        Medium Priority

                    </h3>

                    <ul className="space-y-2">

                        {medium.map((item) => (

                            <li key={item}>🟡 {item}</li>

                        ))}

                    </ul>

                </div>

            )}

            {low.length > 0 && (

                <div>

                    <h3 className="text-green-400 font-bold mb-3">

                        Low Priority

                    </h3>

                    <ul className="space-y-2">

                        {low.map((item) => (

                            <li key={item}>🟢 {item}</li>

                        ))}

                    </ul>

                </div>

            )}

            {high.length === 0 &&
                medium.length === 0 &&
                low.length === 0 && (
                    <p className="text-green-400 font-semibold">
                        ✅ No significant deployment risks detected.
                    </p>
                )}

        </div>

    );

}