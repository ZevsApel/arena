import Image from "next/image";
import { InfrastructureProps } from "./Infrastructure.type";

const Infrastructure = ({ items }: InfrastructureProps) => {
  return (
    <div className="infrastructure">
      <h2 className="infrastructure__title">Инфраструктура отеля</h2>

      <p className="infrastructure__description">
        Наша инфраструктура создана, чтобы каждый гость нашёл здесь своё
        идеальное место для отдыха и развлечений. Просторный бассейн и пляж
        для любителей воды, уличный кинотеатр для атмосферных вечеров,
        детская площадка и спортивное поле для активного
        времяпрепровождения. А разнообразие кафе и ресторанов порадует
        даже самых взыскательных гурманов.
      </p>

      {items.map((item, itemId) => {
        const infrastructureNumber = itemId + 1;

        return (
          <div className="infrastructure__item" key={itemId}>
            <p className="infrastructure__name">{item.name}</p>

            <div className="infrastructure__image-block">
              <Image src={item.image} alt={item.name} />
            </div>

            <p className="infrastructure__advantages">{item.advantages}</p>
            <p className="infrastructure__number">0{infrastructureNumber}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Infrastructure;