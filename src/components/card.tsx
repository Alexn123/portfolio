import { useSession } from "next-auth/react";
import { api } from "~/utils/api";


export const Card = () => {
    //const { data: sessionData } = useSession();
    const {data, isLoading} = api.project.getAll.useQuery();

    if (isLoading) return <div>Loading...</div>
    if(!data) return <div>Something went wrong</div>
    return(
        <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
            {/* <h2 className="card-title">{data?.map(({project}) => (<div key={project.id}>{project.title}</div>))}</h2> */}
            <h2 className="card-title">Project title</h2>
            <p>Project content Project content Project content Project content Project content</p>
            <div className="card-actions justify-end">
                <button className="text-stone-100 btn btn-primary bg-base-300 hover:bg-base-100 border-stone-800 hover:border-stone-800 ">Github</button>
            </div>
            </div>
        </div>
    );
}