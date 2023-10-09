import '../styles/sidebar.css';

export default function PlaylistsLibraryCardComponent(props: {
    title: string,
    creator: string,
    cover: string,
    songs: number
}){
    return(
        <div className="playlist-card-container">
            <div>
                <img src="https://th.bing.com/th/id/OIP.k8VgOI80DfmuekaKmRDY5wHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <div>
                <span className="playlist-card-title">Imagine Dragons Best Of</span>
                <span>Playlist</span>
            </div>
        </div>
    );
}