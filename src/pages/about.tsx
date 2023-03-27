import { NextPage } from "next";
import { api } from "~/utils/api";



const about: NextPage = () => {
    const {data, isLoading} = api.about.getAll.useQuery();
    if (isLoading) return <div>Loading...</div>
    if(!data) return <div>Something went wrong</div>

    return(
        <>
            <div className="hero mt-16">
            <div className="hero-content text-center bg-base-200 p-56 mt-12 rounded-lg">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold ">About me</h1>
                {/* <p className="py-6">{[...data]?.map(({about}) => (<div>{about.content}</div>))}</p> */}
                <p className="py-6">lorem ipsum jne</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default about;