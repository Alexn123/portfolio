import { useSession } from "next-auth/react";
import { api } from "~/utils/api";


export const Card = () => {
    //const { data: sessionData } = useSession();
    const {data, isLoading} = api.project.getAll.useQuery();

    if (isLoading) return <div>Loading...</div>
    if(!data) return <div>Something went wrong</div>
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            {/* <h2 className="card-title">{data?.map(({project}) => (<div key={project.id}>{project.title}</div>))}</h2> */}
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
        </div>
    );
}