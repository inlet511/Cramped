import {TILE_TYPE_ENUM} from "db://assets/scripts/Enums/enums"
import level1 from "db://assets/levels/level1";

export interface ITile{
  src:number | null,
  type:TILE_TYPE_ENUM | null
}

export interface ILevel{
  mapInfo:Array<Array<ITile>>
}

const levels: Record<string,ILevel> = {
  level1
}

export default levels;
