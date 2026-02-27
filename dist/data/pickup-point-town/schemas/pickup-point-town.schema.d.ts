import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelRegion } from '../../region';
export declare class ModelPickupPointTown {
    name: Lang;
    code: string;
    coords: object;
    location: {
        type: string;
        coordinates: [number, number];
    };
    region: ModelRegion;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelPickupPointTownSchema: mongoose.Schema<ModelPickupPointTown, mongoose.Model<ModelPickupPointTown, any, any, any, (mongoose.Document<unknown, any, ModelPickupPointTown, any, mongoose.DefaultSchemaOptions> & ModelPickupPointTown & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPickupPointTown, any, mongoose.DefaultSchemaOptions> & ModelPickupPointTown & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPickupPointTown>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    code?: mongoose.SchemaDefinitionProperty<string, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coords?: mongoose.SchemaDefinitionProperty<object, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: mongoose.SchemaDefinitionProperty<{
        type: string;
        coordinates: [number, number];
    }, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    region?: mongoose.SchemaDefinitionProperty<ModelRegion, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelPickupPointTown, mongoose.Document<unknown, {}, ModelPickupPointTown, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPointTown & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPickupPointTown>;
