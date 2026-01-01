import PageTitle from "./PageTitle";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <PageTitle />
            {children}
        </div>
    );
}