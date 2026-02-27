import mongoose from 'mongoose';
import { ModelCountry } from '../../country';
import { Lang } from '../../interfaces';
export declare class ModelRegion {
    name: Lang;
    code?: string;
    pickup_code?: string;
    country: ModelCountry;
    position?: number;
    is_deleted: boolean;
    is_active: boolean;
}
export declare const ModelRegionSchema: mongoose.Schema<ModelRegion, mongoose.Model<ModelRegion, any, any, any, (mongoose.Document<unknown, any, ModelRegion, any, mongoose.DefaultSchemaOptions> & ModelRegion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelRegion, any, mongoose.DefaultSchemaOptions> & ModelRegion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelRegion>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    code?: mongoose.SchemaDefinitionProperty<string | undefined, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pickup_code?: mongoose.SchemaDefinitionProperty<string | undefined, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number | undefined, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelRegion, mongoose.Document<unknown, {}, ModelRegion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRegion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelRegion>;
