import "./GuideBanner.css";

interface GuideBannerProps {
    photoUrl: string;
}

function GuideBanner({ photoUrl }: GuideBannerProps) {
    return (
        <>
            <div className="banner-header-back" style={{ backgroundImage: `url(${photoUrl})` }}>
                <div className="banner-header">
                    <h1 id="banner-title">The Jim Kelly Team</h1>
                    <h2>From Our Family to Yours</h2>
                </div>
            </div>
        </>
    );
}

export default GuideBanner;
