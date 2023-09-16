import { EventCard } from "./EventCard"

export const Home = () => {
    return(
        <div className="p-4">
            <h1 className="text-2xl font-semibold dark:text-white">Events :</h1>
            <div className="grid grid-cols-5 gap-2 p-4">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard isAdd={true}/>
            </div>
        </div>
    )
}