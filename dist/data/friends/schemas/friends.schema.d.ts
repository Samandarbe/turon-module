import mongoose from 'mongoose';
import { FriendInviteStatus } from '../../../enums';
import { ModelCustomers } from '../../customer';
export declare class ModelFriends {
    sender_user: ModelCustomers;
    receiver_user: ModelCustomers;
    status: FriendInviteStatus;
}
export declare const FriendsSchema: mongoose.Schema<ModelFriends, mongoose.Model<ModelFriends, any, any, any, (mongoose.Document<unknown, any, ModelFriends, any, mongoose.DefaultSchemaOptions> & ModelFriends & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelFriends, any, mongoose.DefaultSchemaOptions> & ModelFriends & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelFriends>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelFriends, mongoose.Document<unknown, {}, ModelFriends, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelFriends & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    sender_user?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelFriends, mongoose.Document<unknown, {}, ModelFriends, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFriends & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiver_user?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelFriends, mongoose.Document<unknown, {}, ModelFriends, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFriends & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<FriendInviteStatus, ModelFriends, mongoose.Document<unknown, {}, ModelFriends, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFriends & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelFriends>;
