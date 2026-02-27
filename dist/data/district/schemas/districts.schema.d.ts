import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelRegion } from '../../region';
export declare class ModelDistricts {
    name: Lang;
    code?: string;
    position?: number;
    region: ModelRegion;
    pickup_code: string;
    is_deleted: boolean;
    is_active: boolean;
}
export declare const ModelDistrictsSchema: mongoose.Schema<ModelDistricts, mongoose.Model<ModelDistricts, any, any, any, (mongoose.Document<unknown, any, ModelDistricts, any, mongoose.DefaultSchemaOptions> & ModelDistricts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelDistricts, any, mongoose.DefaultSchemaOptions> & ModelDistricts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelDistricts>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    code?: mongoose.SchemaDefinitionProperty<string | undefined, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number | undefined, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    region?: mongoose.SchemaDefinitionProperty<ModelRegion, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pickup_code?: mongoose.SchemaDefinitionProperty<string, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelDistricts, mongoose.Document<unknown, {}, ModelDistricts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelDistricts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelDistricts>;
