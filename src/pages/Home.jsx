export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Welcomeeeeee ^3^ <br /> to Movie Booking App 🎬
            </h1>
            <p style={styles.text}>
                Book your favorite movies easily and enjoy the show 🍿💖
            </p>
        </div>
    )
}

const styles = {
    container: {
        height: "100vh",
        backgroundColor: "#ffe6f0", // baby pink
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    title: {
        color: "#ff4d88",
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    text: {
        color: "#555",
        fontSize: "1.2rem",
    },
}
