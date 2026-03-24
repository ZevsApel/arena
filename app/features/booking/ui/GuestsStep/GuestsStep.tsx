import { BOOKING_LIMITS } from "../../model/booking.rules";
import { GuestsStepProps } from "../../model/booking.types";
import Row from "./Row/Row";

const GuestsStep = ({
    data,
    addRoom,
    removeRoom,
    updateGuests,
}: GuestsStepProps) => {
    return (
        <div>
            {data.roomsData?.map((room, index) => {
                const g = room.guests;

                const total =
                    g.adults +
                    g.childrenUnder7 +
                    g.children7to17;

                const isMaxTotal =
                    total >= BOOKING_LIMITS.maxTotalGuestsPerRoom;

                return (
                    <div
                        key={room.id}
                        style={{
                            borderBottom: "1px solid #eee",
                            padding: "16px 0",
                        }}
                    >
                        {/* Заголовок */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 10
                        }}>
                            <strong>Номер {index + 1}</strong>

                            {data.roomsData.length > 1 && (
                                <button
                                    onClick={() => removeRoom(room.id)}
                                >
                                    Удалить
                                </button>
                            )}
                        </div>

                        {/* Взрослые */}
                        <Row
                            label="Взрослые"
                            value={g.adults}
                            min={1}
                            max={BOOKING_LIMITS.maxAdults}
                            onChange={(v) =>
                                updateGuests(room.id, { adults: v })
                            }
                        />

                        {/* Дети до 7 */}
                        <Row
                            label="Дети до 7"
                            value={g.childrenUnder7}
                            min={0}
                            max={
                                isMaxTotal
                                    ? g.childrenUnder7
                                    : BOOKING_LIMITS.maxChildrenUnder7
                            }
                            onChange={(v) =>
                                updateGuests(room.id, { childrenUnder7: v })
                            }
                        />

                        {/* Дети 7-17 */}
                        <Row
                            label="Дети 7–17"
                            value={g.children7to17}
                            min={0}
                            max={
                                isMaxTotal
                                    ? g.children7to17
                                    : BOOKING_LIMITS.maxChildren7to17
                            }
                            onChange={(v) =>
                                updateGuests(room.id, { children7to17: v })
                            }
                        />

                        <div style={{ fontSize: 12, opacity: 0.6 }}>
                            Всего: {total} / {BOOKING_LIMITS.maxTotalGuestsPerRoom}
                        </div>
                    </div>
                );
            })}

            {/* КНОПКА В САМОМ НИЗУ */}
            <div style={{ marginTop: 16 }}>
                <button onClick={addRoom}>
                    + Добавить номер
                </button>
            </div>
        </div>
    );
};


export default GuestsStep;