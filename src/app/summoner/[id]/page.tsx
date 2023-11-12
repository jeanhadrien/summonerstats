
export default function SummonerId({ params }: { params: { id: string } }) {
    console.log(params)
    return <div> Summoner : {params.id}</div>


}
