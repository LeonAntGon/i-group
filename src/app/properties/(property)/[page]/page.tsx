'use client'
import { Error404 } from "@/components/Error404";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DarkHeader } from "@/components/Header/darkHeader";
import { dataProperties } from "@/components/Properties/Properties.data";
import { Property } from "@/components/Property";
import { TransitionPage } from "@/components/TransitionPage";
import { useParams } from "next/navigation";

export default function Page() {
    const router = useParams()
    const propertyId = router.page;
    const filteredPage = dataProperties.find(property => property.id === Number(propertyId))
    

    return (
        <>
        <TransitionPage/>
        <DarkHeader/>
            {filteredPage ? (
                <Property house={filteredPage}/>
            ): (
                <Error404/>
            )}
            <Footer/>
        </>
    )
}
