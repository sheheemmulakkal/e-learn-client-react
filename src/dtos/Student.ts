
 export interface IStudent {
    firstname?: string,
    lastname?: string,
    mobile?: number,
    email?: string,
    wallet?: number,
    courses?: []

}
export interface Student {
    studentId?: string
    studentName?: string
    studentEmail?: string
    student?: IStudent
}