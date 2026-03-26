import Button from "@/app/shared/ui/Button/Button";

const MapControls = ({ zoomIn, zoomOut }: any) => {
    return (
        <div>
            <Button text="" variant="plus" onClick={zoomIn} />
            <Button text="" variant="minus" onClick={zoomOut} />
        </div>
    );
}

export default MapControls;