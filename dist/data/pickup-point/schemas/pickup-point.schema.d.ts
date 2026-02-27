import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelPickupPointTown } from '../../pickup-point-town';
export declare class ModelPickupPoint {
    name: Lang;
    code: string;
    clientcode: string;
    parentcode: string;
    parentname: string;
    address: Lang;
    phone: string;
    comment: string;
    worktime: Lang;
    traveldescription: string;
    acceptcash: boolean;
    acceptcard: boolean;
    acceptfitting: boolean;
    acceptindividuals: boolean;
    latitude: string;
    longitude: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    maxweight: string;
    town: ModelPickupPointTown;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelPickupPointSchema: mongoose.Schema<ModelPickupPoint, mongoose.Model<ModelPickupPoint, any, any, any, (mongoose.Document<unknown, any, ModelPickupPoint, any, mongoose.DefaultSchemaOptions> & ModelPickupPoint & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPickupPoint, any, mongoose.DefaultSchemaOptions> & ModelPickupPoint & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPickupPoint>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    code?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clientcode?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parentcode?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parentname?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: mongoose.SchemaDefinitionProperty<Lang, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    comment?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    worktime?: mongoose.SchemaDefinitionProperty<Lang, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    traveldescription?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    acceptcash?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    acceptcard?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    acceptfitting?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    acceptindividuals?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    latitude?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    longitude?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: mongoose.SchemaDefinitionProperty<{
        type: string;
        coordinates: [number, number];
    }, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maxweight?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    town?: mongoose.SchemaDefinitionProperty<ModelPickupPointTown, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelPickupPoint, mongoose.Document<unknown, {}, ModelPickupPoint, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPickupPoint & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPickupPoint>;
