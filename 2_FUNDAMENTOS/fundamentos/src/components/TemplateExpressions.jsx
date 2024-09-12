const TemplateExpressions = () =>
{
    const name = "José Corsino";
    const data = {
        age: 31,
        job: "Programador"
    }
    return (
<>
<h1>Olá, {name}, tudo bem?</h1>
<p>Você atua como: {data.job}</p>
<p>{4+4}</p>
<p>{console.log("JSX React")}</p>
</>
    );
};

export default TemplateExpressions;