import Image from "next/image";
import { RoomProps } from "./RoomsTypes.type";
import Link from "next/link";

const RoomsTypes = ({ items }: RoomProps) => {
    return (
        <div className="room-types">
            {items.map((item, itemId) => (
                <div className={`room-types__item ${itemId === 0 ? 'room-types__item--big' : ''}`} key={itemId}>
                    <Link href={item.link} className="room-types__link">
                        <div className="room-types__item-image">
                            <Image src={item.image} alt={item.name} />
                        </div>
                        <p className="room-types__item-name">{item.name}</p>
                    </Link>
                </div>
            ))}
        </div>

    )

}

export default RoomsTypes;