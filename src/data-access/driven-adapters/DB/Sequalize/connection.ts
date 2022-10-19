import { Sequelize } from "sequelize";
import { options } from "../config";

export class SequelizeDB {

    private static sequelize: Sequelize;

    public static init() {
        if (this.sequelize === undefined) {
            // this.sequelize = new Sequelize(options)
            this.sequelize = new Sequelize(options.database!, options.user!, options.password!, {
                host: options.host,
                dialect: 'mysql',
                port: options.port,
                define: {
                    timestamps: false,
                    freezeTableName: true,
                    
                },
                
            });
        }
        return this.sequelize;
    }

    public static async connected() {
        try {
            await this.sequelize.authenticate();
            console.log('BD connected');
        } catch (error) {
            console.log('BD failed', error);

        }
    }

}