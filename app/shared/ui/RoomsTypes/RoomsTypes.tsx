import Image from "next/image";
import { RoomProps } from "./RoomsTypes.type";
import Link from "next/link";

const RoomsTypes = ({ items }: RoomProps) => {
    items.map((item, itemId) => {
        return (
            <div className={`rooms-type ${itemId === 0 ? 'room-type__big' : ''}`} key={itemId}>
                <Link href={item.link}>
                    <div className="rooms-type__image-block">
                        <Image src={item.image} alt={item.name} />
                    </div>
                    <div className="rooms-type__name-block">
                        <p className="rooms-type__name">{item.name}</p>
                    </div>
                </Link>
            </div>
        )
    })
}

export default RoomsTypes;