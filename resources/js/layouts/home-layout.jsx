import ObserverProvider from "@/components/observerProvider";

export default function HomeLayout({ children }) {
    return (
        <div className="py-5 bg-base-300">
            <ObserverProvider>
                {children}
            </ObserverProvider>
        </div>
    );
}