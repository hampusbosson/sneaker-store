function ContentButton({name}) {
    return (
        <div>
            <button className="text-black text-lg hover:font-bold">
                {name}
            </button>
        </div>
    );
}

export default ContentButton