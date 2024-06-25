import { mapProjectsResponse } from "common/helpers";

export type Project = NonNullable<ReturnType<typeof mapProjectsResponse>[0]>;
