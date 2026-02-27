import mongoose, { Date } from 'mongoose';
import { ModelPostCategory } from './post-category.schema';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
export declare class ModelPost {
    title: Lang;
    subtitle: Lang;
    content: Lang;
    pub_date: Date;
    position: number;
    photo: string;
    is_active: boolean;
    is_send: boolean;
    on_slider: boolean;
    group: string;
    menu: ModelMenu;
    category: ModelPostCategory;
    post: ModelPost;
    views: number;
    main_image: string;
    add_param_1: string;
    add_param_2: string;
    add_param_3: string;
    add_param_4: string;
    add_param_5: string;
    add_param_object_1: Lang;
    add_param_object_2: Lang;
    add_param_object_3: Lang;
    add_param_object_4: Lang;
    add_param_object_5: Lang;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelPostSchema: mongoose.Schema<ModelPost, mongoose.Model<ModelPost, any, any, any, (mongoose.Document<unknown, any, ModelPost, any, mongoose.DefaultSchemaOptions> & ModelPost & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPost, any, mongoose.DefaultSchemaOptions> & ModelPost & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPost>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subtitle?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pub_date?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.Date, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_send?: mongoose.SchemaDefinitionProperty<boolean, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    on_slider?: mongoose.SchemaDefinitionProperty<boolean, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    group?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: mongoose.SchemaDefinitionProperty<ModelPostCategory, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post?: mongoose.SchemaDefinitionProperty<ModelPost, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    views?: mongoose.SchemaDefinitionProperty<number, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    main_image?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_1?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_2?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_3?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_4?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_5?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_object_1?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_object_2?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_object_3?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_object_4?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    add_param_object_5?: mongoose.SchemaDefinitionProperty<Lang, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelPost, mongoose.Document<unknown, {}, ModelPost, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPost & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPost>;
