import { _decorator, Component, Layers, Node , resources, Sprite, SpriteFrame, UITransform, Widget} from 'cc';
const { ccclass, property } = _decorator;
import Levels from "../levels/alllevels"

export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;

@ccclass('TileMapManager')
export class TileMapManager extends Component {

    async init(){
        const {mapInfo} = Levels[`level${1}`];

        const spriteFrames = await this.loadRes();

        for(let i = 0; i<mapInfo.length; i++)
        {
            const column = mapInfo[i];
            for(let j = 0; j<column.length; j++)
            {
                const item = column[j];
                if(item.src === null || item.type === null)
                {
                    continue;
                }
                const node = new Node(`tile ${i}-${j}`);
                node.setParent(this.node);
                node.layer = Layers.Enum.UI_2D;

                const sprite = node.addComponent(Sprite);
                const imgSrc = `tile (${item.src})`;
                sprite.spriteFrame = spriteFrames.find(v=>v.name===imgSrc) || spriteFrames[0];

                const uiTransform = node.addComponent(UITransform);
                uiTransform.setContentSize(TILE_WIDTH, TILE_HEIGHT);

                node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);

            }
        }
    }

    loadRes(){
        return new Promise<SpriteFrame[]>((resolve, reject)=>{
            resources.loadDir("texture/tile/tile", SpriteFrame, function(err,assets){
                if(err)
                {
                    reject(err);
                    return;
                }else{
                    resolve(assets);
                }
            });
        });

    }
}


