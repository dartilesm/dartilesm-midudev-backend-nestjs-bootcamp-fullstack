import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNoteDTO {
  @IsOptional()
  id: number;
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsOptional()
  date: string;
  @IsOptional()
  @IsBoolean()
  important: boolean;
}
