import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class TaskSchema {
  @Prop()
  title: string;

  @Prop()
  done: boolean;
}
