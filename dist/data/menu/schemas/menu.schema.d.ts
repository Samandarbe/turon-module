import mongoose from 'mongoose';
import { MenuDataType } from '../../../enums';
import { Lang } from '../../interfaces';
export declare class ModelMenu {
    _id: string;
    uid: number;
    title: Lang;
    subtitle: Lang;
    content: Lang;
    position: number;
    link: string;
    svg_icon: string;
    type: string;
    datatype: MenuDataType[];
    group: string;
    menu: ModelMenu;
    photo: string;
    on_header: boolean;
    on_footer: boolean;
    on_slider: boolean;
    is_active: boolean;
    is_category: boolean;
    is_admin: boolean;
    has_category: boolean;
    is_deleted: boolean;
}
export declare const ModelMenuSchema: mongoose.Schema<ModelMenu, mongoose.Model<ModelMenu, any, any, any, (mongoose.Document<unknown, any, ModelMenu, any, mongoose.DefaultSchemaOptions> & ModelMenu & Required<{
    _id: string;
}> & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelMenu, any, mongoose.DefaultSchemaOptions> & ModelMenu & Required<{
    _id: string;
}> & {
    __v: number;
}), any, ModelMenu>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
    _id: string;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<string, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    uid?: mongoose.SchemaDefinitionProperty<number, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subtitle?: mongoose.SchemaDefinitionProperty<Lang, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: mongoose.SchemaDefinitionProperty<Lang, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    link?: mongoose.SchemaDefinitionProperty<string, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    svg_icon?: mongoose.SchemaDefinitionProperty<string, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    datatype?: mongoose.SchemaDefinitionProperty<MenuDataType[], ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    group?: mongoose.SchemaDefinitionProperty<string, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: mongoose.SchemaDefinitionProperty<string, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    on_header?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    on_footer?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    on_slider?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_category?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_admin?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    has_category?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelMenu, mongoose.Document<unknown, {}, ModelMenu, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenu & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelMenu>;
