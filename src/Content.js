export default function Content() {
    const handleNameChange = () => {
        const names = ['Luiz', 'Eduardo', 'Gabriel'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    return (
        <main>
            <p>
                Hello {handleNameChange()} !
            </p>
        </main>
    );
}
