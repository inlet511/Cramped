import { _decorator, Component, Node } from 'cc';
import { TileMapManager } from './TileMapManager';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    start() {
        this.generateMap();
    }

    update(deltaTime: number) {

    }

    generateMap(){
        const stage = new Node("stage");
        stage.setParent(this.node);

        const tileMap = new Node("tileMap");
        tileMap.setParent(stage);

        const tileMapManager = tileMap.addComponent(TileMapManager);
        tileMapManager.init();
    }
}


