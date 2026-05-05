export class Detalhes {
    public altitudeMax: number;
    public sensores: string[];

    constructor(data: any) {
        this.altitudeMax = data.altitude_max;
        this.sensores = data.sensores;
    }
}